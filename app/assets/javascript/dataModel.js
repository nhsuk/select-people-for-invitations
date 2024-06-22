const campaignData =
{
   "campaign":
   {
      "details":
      {
         "campaignId": "uuid",
         "Name": "",
         "startDate": "",
         "endDate": "",
         "type": "",
         "target": "",
         "SRO": "owner"
      },
      "governance":
      {
         "budget":
         {
            "budgetId": "uuid",
            "approvalStatus": "",
            "costCentre": "",
            "budgetHolder": "SRO"
         },
         "actors":
         {
            "owner":
            {
               "campaignId": "uuid",
               "userId": "uuid",
               "name": "",
               "email": "",
               "permission": ""
            },
            "approver":
            {
               "campaignId": "uuid",
               "userId": "uuid",
               "name": "",
               "email": "",
               "permission": ""
            },
            "editor":
            {
               "campaignId": "uuid",
               "userId": "uuid",
               "name": "",
               "email": "",
               "permission": ""
            }
         },
         "OKRs":
         {
            "1":
            {
               "OKRId": "uuid",
               "objective": "",
               "keyResults":
               [
                  "keyResult1",
                  "keyResult2",
                  "keyResult3"
               ],
               "outcome":
               {
                  "outcomeId": "uuid",
                  "OKRId": "uuid",
                  "title": "",
                  "description": "",
                  "date": ""
               }
            },
            "2":
            {
               "OKRId": "uuid",
               "objective": "",
               "keyResults":
               [
                  "keyResult1",
                  "keyResult2",
                  "keyResult3"
               ],
               "outcome":
               {
                  "outcomeId": "uuid",
                  "OKRId": "uuid",
                  "title": "",
                  "description": "",
                  "date": ""
               }
            },
            "3":
            {
               "OKRId": "uuid",
               "objective": "",
               "keyResults":
               [
                  "keyResult1",
                  "keyResult2",
                  "keyResult3"
               ],
               "outcome":
               {
                  "outcomeId": "uuid",
                  "OKRId": "uuid",
                  "title": "",
                  "description": "",
                  "date": ""
               }
            }
         },
         "workflow":
         {
            "events":
            {
               "eventId": "uuid",
               "campaignId": "uuid",
               "eventType":
               {
                  "requestApproval":
                  {
                     "requestId": "uuid",
                     "requestingUserId": "userId",
                     "approvingUserId": "userId",
                     "requestDetails":
                     {
                        "description": "",
                        "requestStatus": "",
                        "decisionId": "uuid",
                        "decisionExplanation": ""
                     }
                  }
               }
            }
         }
      }
   }
};
console.log("modelled")
window.sessionStorage.setItem("campaignData", JSON.stringify(campaignData));
console.log("stored")
