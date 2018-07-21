import Mock from 'mockjs'

import { tableApiData } from '@/interfaces/table'
import { pieApiData } from '@/interfaces/pie'

export function getTableData(): tableApiData {
  return Mock.mock({
    'data|100': [
      {
        'id|+1': 1,
        'name': '@cname',
        'date': '@date'
      }
    ]
  })
}

export function getPieChartData(): pieApiData {
  return Mock.mock({
    'data|6-10': [
      {
        'value|100-200': 1,
        'name': '@cname'
      }
    ]
  })
}
