from fastapi import FastAPI
from src.dbconnection.base import users_collection

app = FastAPI()

class authMiddleware:
    def __init__(self, app):
        self.app = app
    async def __call__(self, request, call_next):
        # Add your authentication logic here

        response = await call_next(request)
        return response

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/users")
def get_users():
    users = list(users_collection.find({},{'_id':0}))  # hide Mongo _id
    print(users)
    return users