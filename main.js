window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "0727e2e0-25b1-456a-9e64-034a935c0878",
      notifyButton: {
        enable: true,
      },
       subdomainName: "system-mk",
    });
  });    

       fetch('https://onesignal.com/api/v1/notifications/eb82fca8-dbb2-43db-a60e-bf7a8a550b68?app_id=0727e2e0-25b1-456a-9e64-034a935c0878', {
               method: 'POST',              
                headers: {               
                  "Content-type": "application/json; charset=utf-8",
                  "Access-Control-Allow-Origin": "https://onesignal.com/api/v1/notifications/eb82fca8-dbb2-43db-a60e-bf7a8a550b68?app_id=0727e2e0-25b1-456a-9e64-034a935c0878",
                  "Authorization": "Basic NzJjNTg0NzUtMzU2Zi00OTExLTgzMTktZmJjM2Y5NDQ5Y2E4"
                }
           }).then(response => response.json())
            .then(json => {
            console.log(json);
             });    
