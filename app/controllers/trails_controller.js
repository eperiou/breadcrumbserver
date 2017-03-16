// 'use strict';

const Nodal = require('nodal');

const Trail = Nodal.require('app/models/trail.js');

class TrailsController extends Nodal.Controller {

  index() {
    Trail.query()
      .where(this.params.query)
      .join('crumb')
      .end((err, models) => {
        this.respond(err || models, [
          'id',
          'user_id',
          'name',
          'description',
          'rating',
          'type',
          'length',
          'requires_money',
          'start_Crumb',
          'end_Crumb',
          'created_at',
          'updated_at',
          { crumb: ['trail_id',
            'name',
            'description',
            'order_Number',
            'geoId',
            'latitude',
            'longitude',
            'radius',
            'notification_id',
            'title',
            'small_icon',
            'open_app_on_click',
            'vibration',
            'data',
            'text',
            'image',
            'video',
            'aR'] },
        ]);
      });
  }
  show() {
    Trail.find(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }
  create() {
    Trail.create(this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  update() {
    Trail.update(this.params.route.id, this.params.body, (err, model) => {
      this.respond(err || model);
    });
  }
  destroy() {
    Trail.destroy(this.params.route.id, (err, model) => {
      this.respond(err || model);
    });
  }
}

module.exports = TrailsController;
