# Kyyba Bank


git remote add github https://github.com/mikdanjey/AlexaKyybaBank.git

git add --all
git commit -m "Updated"

git push origin master

git push github master


* npm install -g ask-cli

* ask configure
* ask new
* ask dialog --locale en-US

* open kyyba bank

npm install -g npm-check-updates

ncu -u

open kyyba bank
check my bank account
chase

https://www.amazon.com/privacy

## Ref Link
https://www.amazon.com/privacy

https://developer.amazon.com/docs/tools/icon-builder.html

GET http://localhost:8000/api/v1/get-bank-by-name/chase

GET http://localhost:8000/api/v1/get-account-by-last-digit/2323

POST http://localhost:8000/api/v1/current-balance/

Body:
    {
        "account_number": 12345678904,
        "pin": 1390
    }

POST http://localhost:8000/api/v1/statement-by-check-last-digit/

Body:
    {
        "account_number": 12345678904,
        "check_number": 412
    }

POST http://localhost:8000/api/v1/last-deposit/

Body:
    {
        "account_number": 12345678904
    }





              {
                  "name": "GetAccountInfoByBankNameIntentHandler",
                  "slots": [
                      {
                          "name": "bankName",
                          "type": "AMAZON.Ordinal",
                          "samples": [
                              "the {bankName}"
                          ]
                      }
                  ],
                  "samples": [
                      "{bankName}"
                  ]
              },