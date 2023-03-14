module.exports = {
    messages:function(req, res){
        res.view('messages');
    }, 
    residence_halls:function(req, res){
        res.view('residence_halls');
    },
    dining:function(req, res){
        res.view('dining');
    },
    supplies:function(req, res){
        res.view('supplies');
    },
    events:function(req, res){
        res.view('events');
    },
    sarasota:function(req, res){
        res.view('sarasota');
    },
    leaderboard:function(req, res){
        res.view('leaderboard');
    },
    profile:function(req, res){
        res.view('profile');
    },
    new_post:function(req, res){
        res.view('new_post');
    },
    scheduler: function(req, res){
        res.view('scheduler');
    },
    new_event: function(req, res){
        res.view('new_event');
    },

    orientation: function(req,res){
        res.view('orientation');
},
    edit_profile_pic: function(req, res){
        res.view('edit_profile_pic');

    }


};