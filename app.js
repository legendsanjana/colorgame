var express=require("express");
var app=express();
var bo=require("body-parser");
app.use(bo.urlencoded({extended:true}));
app.set("view engine","ejs");
var com=[
	{name:"mayur vihar",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZN7ADmsViLaVrNMufoOWjppTASyBGmDmV3oCLWl9kD91YDkwvA",description:"This source is located at mayur vihar,delhi near IB school.People dump garbage here and workers put fire to blow it down."},
	{name:"nangloi",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMdaEmRfz-oGP3JOyndaMQBtsOBG_WTpag3qXrTW2YTqAomPgyw",description:"It is a garbage dumping source of whole locality in naangloi near INOX mall."},
	{name:"rohtak",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCdDMxCjAMRhggEM6mHqh9IOq87r2ilwid5t_ql17c_VlpHES",description:"In gurgaon it causes a lot of pollution due to blowing of sand at this construction site.It is in front of BIRLA BUILDINGS"},
	{name:"gurgaon sector45",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWziyEwsyT_SENjbFLYEIhZF9o_g7HGNp4traobdbIXNsZxXR2Q",description:"this is located under ifco chowk flyover.It causes a lot of water pollution."},
	{name:"gurgaon sohna road",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8vrLiJUccTKaWWdRT6VGwXflFhCk3Y1YzZpT6p_t_SyRvJBF",description:"in the forest ,someone lit the fir to burn some dry trees"}
	
	];
app.get("/",function(req,res)
{
	res.render("a.ejs");
});
app.get("/com",function(req,res)
{
	
	res.render("b.ejs",{com:com});
});
app.post("/campg",function(req,res)
{
	var name=req.body.name;
	var img=req.body.link;
	var des=req.body.description;
	com.push({name:name,link:img,description:des});
	res.redirect("/com");
})
app.get("/cg/new",function(req,res)
{
	res.render("new.ejs");
})
app.listen(3000,function()
{
	console.log("welcome");
});