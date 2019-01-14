import Route from '@ember/routing/route';
var arr = [
  {
    "id":"1",
   "name": "aaa"
  },
   {
     "id":"2",
   "name": "bbb"
 },
 {
   "id":"3",
 "name": "ccc"
},
{
  "id":"4",
"name": "ddd"
}];

function delay(sec) {
return new Promise(reject => setTimeout(reject , sec));
}

export default Route.extend({
  model(params)
  {
    return delay(3000).then(() =>
   {
    // does not return anything
   })
}

});
