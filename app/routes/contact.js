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
}] ;



export default Route.extend({
  model (params)
  {
    queryParams: {
        id: ''
    }
      var res = [];
      var j=0;
      var qp = params.id;
      console.log(qp);

      if(qp<5 && qp>1)
      {
        for (var i = 0; i < arr.length; i++){
         var x = params.contact_id;
          var obj = arr[i];
         // console.log(obj);
          for (var key in obj){
            var value = obj[key];
            //console.log(value, params.contact_id);
            if(value==qp)
            {
              res[j] = obj;
              j++;
              //console.log(obj);ss
              return res;
              break;
            }
          }

      }
    }
      if(params.contact_id == null)
      {
          console.log("Inside if");
         return arr;
      }
      else {
             for (var i = 0; i < arr.length; i++){
              var x = params.contact_id;
               var obj = arr[i];
              // console.log(obj);
               for (var key in obj){
                 var value = obj[key];
                 //console.log(value, params.contact_id);
                 if(key=="id" && value==x)
                 {
                   res[j] = obj;
                   j++;
                   //console.log(obj);ss
                   break;
                 }
               }

            }
            return res;
          }

  /*
  actions: {
   error(error, transition) {
     console.log("Inside actions");
     if (error.status === '200') {
        this.replaceWith('contacts');
        }
    else {
       // Let the route above this handle the error.
       return true;
     }
   }
 }
 */
}
});
