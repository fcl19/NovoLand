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


};