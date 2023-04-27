## Texo challenge backend

### 🚀 Proposed challenge

Develop a RESTful API to read the list of nominees and winners
in the Worst Picture category at the Golden Raspberry Awards.


### 📁 The project (path in repo: backend)

To run project, follow the steps(this project using the 18.15.0 node version):

* Clone repo
* Run `npm i` to install all dependencies
* Add `.env` file, just copy the `.env.example` and set the port, but if if don't pass any port, 3333 is the default port
* Run `npx prisma migrate dev` to setup all migrations
* Run `npm run seed` to populate database
* Run `npm run start:dev` to run the project 

If you wanna change the `movies.csv`, enter the folder `src/seed/uploadMovies/data`, inside the docs folder has a `texo-back-collection` file to use on insomnia, inside this one, I put all requests

The main libs and tools I used in these projects was:

* Express
* Typescript
* Prisma
* csv-parser
* tsx
* tsup
* dotenv
* zod
* swagger-ui-express

### Screen

Simple request to movies route

<img width="1392" alt="Screenshot 2023-04-08 at 08 50 51" src="https://user-images.githubusercontent.com/54275445/230784851-57aceb55-d4d8-4095-a0a1-c1bc867c7bc3.png">

If you wanna manage the data in database run `npm run studio`, so prisma Studio is up on `http://localhost:5555`
![Screenshot 2023-04-08 at 09 02 11](https://user-images.githubusercontent.com/54275445/230784897-1d67e13f-3b48-4df1-9e4e-dc86d1f43ffe.png)

Swager `/docs`
![Screenshot 2023-04-09 at 13 16 48](https://user-images.githubusercontent.com/54275445/230784913-91158543-6758-4f15-b5fd-aa16b80d9266.png)


I would have liked to have done more, but time was a factor that hindered me, I would have liked to have implemented tests, a better doc, among other things.

FROM builder as dev
RUN npm i 
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]