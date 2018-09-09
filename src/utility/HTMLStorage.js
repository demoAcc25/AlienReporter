




export default{

    methods:{
        getStorage(item){
            return JSON.parse(localStorage.getItem(item)) ;
        },
        saveToStorage(key, items, data){
            if(items){
                items.push(data) ;
                localStorage.setItem(key, JSON.stringify(items))   ;
            }
            else{
                let storageArray = [] ;
                storageArray.push(data) ;
                localStorage.setItem(key, JSON.stringify(storageArray)) ;
            }
            return true ;
        }
    }
}