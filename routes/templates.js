
/*
* GET angular template.
*/

exports.items = function(req, res){
  res.render('items', { title: 'items - list' });
};

exports.view = function(req, res){
  res.render('item-view', { title: 'item - view' });
}
