# Blue Ocean API Endpoints

See [API Routes](./client/src/api/routes.js) or visit the base endpoint: `SERVER_URL/`

---

```
-------------
.ENDPOINT => /products
. .PARAMS: {
. . page: Number, .
. .count: Number
. }
. .METHOD: GET
. .BODY: {
. . customer_id: Number, .
. .cost: Number, .
. .order_date: String
. }

. .ENDPOINT => /products/info
. . .PARAMS: {
. . . productId: ["Number","String"]
. . }
. . .BODY: {
. . . id: Number, .
. . .product_image: String, .
. . .product_name: String, .
. . .product_cost: String, .
. . .product_inventory: Number, .
. . .product_rating: Number, .
. . .product_desription: String
. . }
. . .METHOD: ["GET","POST"]

-------------
.ENDPOINT => /user

. .ENDPOINT => /user/subscription-status
. . .METHOD: POST
. . .BODY: {
. . . userId: String, .
. . .newStatus: Boolean
. . }

. .ENDPOINT => /user/all
. . .METHOD: ["GET"]

. .ENDPOINT => /user/account-type
. . .METHOD: ["GET","POST"]
. . .BODY: {
. . . accountType: ["customer","farmer","nutritionist",null]
. . }
. . .PARAMS: {
. . . userId: String
. . }

. .ENDPOINT => /user/account-details
. . .METHOD: ["GET","POST"]
. . .BODY: {
. . . firstName: ["String",null], .
. . .lastName: ["String",null], .
. . .address: ["String",null], .
. . .city: ["String",null], .
. . .state: ["String",null], .
. . .zip_code: ["String",null], .
. . .referall_code: ["String",null], .
. . .referall_code_used: ["Boolean",null], .
. . .first_purchase_complete: ["Boolean",null], .
. . .credit_available: ["Number",null]
. . }
. . .PARAMS: {
. . . userId: String
. . }

-------------
.ENDPOINT => /transaction
. .PARAMS: {
. . transactionId: ["String","Number"]
. }
. .METHOD: ["POST","GET"]
. .BODY: {
. . customer_id: Number, .
. .cost: Number, .
. .order_date: String
. }

. .ENDPOINT => /transaction/all
. . .PARAMS: {
. . . userId: ["String","Number"]
. . }
. . .METHOD: GET
```
