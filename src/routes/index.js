import Router from 'koa-router'
import indexCtrl from '../controllers/indexCtrl'
import statusCtrl from '../controllers/statusCtrl'

const router = Router()

router.get('/', indexCtrl)

router.get('/status', statusCtrl)

export default router
