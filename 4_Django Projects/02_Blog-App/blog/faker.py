from .models import Category, Blog
from faker import Faker


def run():
    fake = Faker(["tr-TR"])
    categories = ("Life", "Science", "Politics", "Sports")

    for category in categories:
        new_category = Category.objects.create(name=category)
        for _ in range(4):
            Blog.objects.create(category=new_category,
                                title=fake.name(), content=fake.text())
    print("Finished")