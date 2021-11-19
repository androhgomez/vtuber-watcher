Alessandro H. Gomez Portfolio project: vtuber-watcher

Queries a fanmade GraphQL API for video info for a predetermined list of Youtube channels and displays the result

Chooks API: https://github.com/Choooks22/vt-api


Things to improve:

* Runs on development env (figuring out why running it in a Docker container with Unicorn is malfunctioning)

* Add the ability to add channels to the query

* Handle the querying on the controller and render results on async client-side Javascript (no need for refresh)

* Result filters and sort