# Back-End
The sauce

Endpoints:

|       |       |       |
|---    |---    |---    |
|**GET**    |*/api/users*    |List of all users  |
|**GET**    |*/api/users/:id*   |Shows user with given id   |
|**GET**    |*/api/potluck/:id*    |Shows the attendance of given potluck   |
|**GET**    |*/api/potluck/user/:id*    |Shows user with given id at potluck    |
|**GET**    |*/api/potluck/:id/foodlist*    |Shows the list of foods for given potluck   |
|**GET**    |*/api/potlucks*    |List of all potlucks   |
|**GET**    |*/api/potlucks/:id*    |Shows potluck with given id   |
|**GET**    |*/api/foods*    |List of all foods   |
|**GET**    |*/api/foods/:id*    |Shows food with given id   |
|**PUT**    |*/api/users/:id*    |Updates user with given id   |
|**PUT**    |*/api/potluck/confirmation/:id*    |Edits attendance at potluck   |
|**PUT**    |*/api/potluck/:id/foodlist*    |Edits foodlist for potluck   |
|**PUT**    |*/api/potlucks/:id*    |Edits potluck   |
|**PUT**    |*/api/foods/:id*    |Edits food at id   |
|**POST**    |*/api/potluck/invite*    |Creates new invitation   |
|**POST**    |*/api/potluck/:id/foodlist*    |Creates new item in foodlist for potluck   |
|**POST**    |*/api/potlucks*    |Creates new potluck   |
|**POST**    |*/api/foods*    |Adds food to foodlist   |
|**DELETE**    |*/api/users/:id*    |Deletes user at id   |
|**DELETE**    |*/api/potluck/foodlist/:id*    |Deletes food item in potluck with given id   |
|**DELETE**    |*/api/potlucks/:id*    |Deletes potluck with given id   |
|**DELETE**    |*/api/foods/:id*    |Deletes food with given id   |