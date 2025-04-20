from pymongo import MongoClient
from  src.config import MONGO_URI, MONGO_DB, MONGO_COLLECTION

client = MongoClient(MONGO_URI)
db = client[MONGO_DB]
users_collection = db[MONGO_COLLECTION]

def find_user_by_email(email: str):
    return users_collection.find_one({"email": email})

def create_user(name: str, email: str, profile_picture: str):
    user = {"name": name, "email": email, "profile_picture": profile_picture}
    users_collection.insert_one(user)
    return user