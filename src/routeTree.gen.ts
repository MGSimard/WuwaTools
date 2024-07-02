/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WorldmapImport } from './routes/worldmap'
import { Route as TierlistImport } from './routes/tierlist'
import { Route as IndexImport } from './routes/index'
import { Route as RosterIndexImport } from './routes/roster.index'

// Create/Update Routes

const WorldmapRoute = WorldmapImport.update({
  path: '/worldmap',
  getParentRoute: () => rootRoute,
} as any)

const TierlistRoute = TierlistImport.update({
  path: '/tierlist',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RosterIndexRoute = RosterIndexImport.update({
  path: '/roster/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/tierlist': {
      id: '/tierlist'
      path: '/tierlist'
      fullPath: '/tierlist'
      preLoaderRoute: typeof TierlistImport
      parentRoute: typeof rootRoute
    }
    '/worldmap': {
      id: '/worldmap'
      path: '/worldmap'
      fullPath: '/worldmap'
      preLoaderRoute: typeof WorldmapImport
      parentRoute: typeof rootRoute
    }
    '/roster/': {
      id: '/roster/'
      path: '/roster'
      fullPath: '/roster'
      preLoaderRoute: typeof RosterIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  TierlistRoute,
  WorldmapRoute,
  RosterIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/tierlist",
        "/worldmap",
        "/roster/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/tierlist": {
      "filePath": "tierlist.tsx"
    },
    "/worldmap": {
      "filePath": "worldmap.tsx"
    },
    "/roster/": {
      "filePath": "roster.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
