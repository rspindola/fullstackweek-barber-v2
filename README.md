<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src=".github/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">FullStack Week Barbershop</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://fullstackweek-barber-mu.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/rspindola/fullstackweek-barber-v2/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/rspindola/fullstackweek-barber-v2/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

[![FullStack Week Barber][product-screenshot]](https://fullstackweek-barber-mu.vercel.app)

Barbershop scheduling system created during the [FullStack Week](https://www.youtube.com/@dicasparadevs) event.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Prisma][Prisma]][Prisma-url]
* [![Node][Node.js]][Node-url]
* [![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

_Follow the steps below to install and set up your app:_

1. Clone the repo
    ```sh
    git clone git@github.com:rspindola/fullstackweek-barber-v2.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Copy the `.env` example file to create your environment configuration.
    ```sh
    cp .env.example .env
    ```
4. Fill in the .env file with the appropriate configuration values.
- For the NextAuth variables, refer to the NextAuth.js [Google Provider documentation](https://next-auth.js.org/providers/google).
- For `DATABASE_URL`, you can use the Postgres database configuration provided in the `docker-compose.yml` file included in the repository. See [docker compose docs](https://docs.docker.com/compose/gettingstarted/).

5. Install migrations and seed in database.
    ```sh 
    npx prisma migrate deploy &&  npx prisma db seed 
    ```
5. Run app.
    ```sh 
    npm run dev
    ```

5. Access [http://localhost:3000](http://localhost:3000).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Youtube Felipe Rocha - dicasparadevs](https://www.youtube.com/@dicasparadevs)
* [Instagram @byfeliperocha](https://www.instagram.com/byfeliperocha/)
* [Instagram @cursofullstackclub](https://www.instagram.com/cursofullstackclub/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template/tree/main)
* [Markdown Badges](https://github.com/Ileriayo/markdown-badges)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: .github/images/mockup.png

<!-- LOGOS BADGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/pt
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-000?style=for-the-badge&logo=postgresql
[PostgreSQL-url]: https://www.postgresql.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/