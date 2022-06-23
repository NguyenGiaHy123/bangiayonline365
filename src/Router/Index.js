const user=require('./user');
const product=require('./product');
const Cart=require('./Cart')
const Comment=require('./Comment');
const Admin=require('./Admin')
const menu=require('./menu')
const search=require('./search')
function Router(app){
    app.use('/api/user',user)
    app.use('/api/product',product)
    app.use('/api/cart',Cart)
    app.use('/api/comment',Comment)
    app.use('/api/admin',Admin)
    app.use('/api/menu',menu)
    app.use('/api/search',search)
}
module.exports=Router