import { publicProcedure, router } from '../trpc'

const countries = [
  {
    name: 'Østrig',
    destinations: ['Wagrain', 'Ishgl']
  },
  {
    name: 'Frankrig',
    destinations: ['Morzine', 'Avoriaz', 'Méribel']
  },
  {
    name: 'Tyskland',
    destinations: ['Brauneck']
  },
  {
    name: 'Italien',
    destinations: ['Livigno', 'Val Gardena']
  }
]

export const appRouter = router({
  countries: publicProcedure
    .query(() => {
      return {
        countries
      }
    })
})

// export type definition of API
export type AppRouter = typeof appRouter
