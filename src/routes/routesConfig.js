import HomePage from "@pages/HomePage"
import PeoplePage from '@pages/PeoplePage'

import PageNotFound from '@pages/PageNotFound'
import PersonPage from '@pages/PersonPage'
import FavoritesPage from '@pages/FavoritesPage'
import SearchPage from "../pages/SearchPage"
import FailPage from "../pages/FailPage/FailPage"

export const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/people',
    element: <PeoplePage />
  },
  {
    path: '/people/:id',
    element: <PersonPage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
  {
    path: '/search',
    element: <SearchPage />
  },
  {
    path: '/fail',
    element: <FailPage />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]