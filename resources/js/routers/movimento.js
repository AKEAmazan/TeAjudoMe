import Home from '@views/Movimento117/Home'
import Donate from '@views/Movimento117/Donate'
import Volunteer from '@views/Movimento117/Volunteer'
import Store from '@views/Movimento117/Store'
import StaySafe from '@views/Movimento117/StaySafe'
import HowWorks from '@views/Movimento117/HowWorks'
import About from '@views/Movimento117/About'

export default [
  {
    path: '/movimento117',
    name: 'Movimento117',
    component : Home,
    meta: {
      layout: 'Movimento117'
    }
  },
  {
    path: '/movimento117/quero-doar',
    name: 'movimento117Donate',
    component : Donate,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_donate'
    }
  },
  {
    path: '/movimento117/voluntario',
    name: 'movimento117Volunteer',
    component : Volunteer,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_volunteer'
    }
  },
  {
    path: '/movimento117/central-de-coleta',
    name: 'movimento117Store',
    component : Store,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_volunteer'
    }
  },
  {
    path: '/movimento117/fique-seguro',
    name: 'movimento117StaySafe',
    component : StaySafe,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_staysafe'
    }
  },
  {
    path: '/movimento117/como-funciona',
    name: 'movimento117HowWorks',
    component : HowWorks,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_howworks'
    }
  },
  {
    path: '/movimento117/sobre',
    name: 'movimento117About',
    component : About,
    meta: {
      layout: 'Movimento117',
      bodyClass: 'm117_about'
    }
  },
]
