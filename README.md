# The movie database challenge

Source: unknown

## Summary

Challenge repo for getting acquainted with Vue (just happened to use Nuxt as well for having a server as well). Minimal to no styling was used in here so expect a terrible looking web

### Features

- Show movies sorted by descending popularity (default, no filters)
- Filter by rating: each star represents 2 in the movies rating, so one star filters movies with ratings from 0 to 2.
- Search movies: allow searching through movies. Disclaimer: search and rating filter do not work together, so if using one the other gets disabled (could not make star rating filter to disable on non-empty search value)
- Pagination for default, rating filter and search (each control their own pagination)
- Movie detail page: just a simple view reached on clicking a movie title. It fetches the selected movie and displays minimal info and their post image

## Stack

- Nuxt 3
- TailwindCSS
