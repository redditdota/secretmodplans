import configparser
import praw
import time

config = configparser.ConfigParser()
config.read("config.txt")

r = None
subreddit_name = "dota2test"

processedPosts = set()

def login():
    global r
    global config

    r = praw.Reddit(client_id=config.get("config", "CLIENT_ID"),
                        client_secret=config.get("config", "CLIENT_SECRET"),
                        password=config.get("config", "BOT_PASSWORD"),
                        user_agent='Dota 2 sidebar bot',
                        username=config.get("config", "BOT_USERNAME"))

def checkPosts():
    global processedPosts

    subreddit = r.subreddit(subreddit_name)
    posts = subreddit.hot(limit=25)

    for post in posts:
            if post.id not in processedPosts:
                    processedPosts.add(post.id)

                    #make comment
                    #sticky comment

def respondToUsers():
    for message in r.inbox.unread():
            #reply with some cool comment
            pass

if __name__ == "__main__":
    login()

    while True:
            print(r)
            break