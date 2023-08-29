import { tableData } from '@/stories/components/ITable/const'

import { Template } from '../template'

const ITableSimple = Template.bind({})

ITableSimple.args = {
  dataSource: tableData,
  simpleTableFlag: true,
  blockAutoRequestFlag: true,
  expandable: undefined,
}

ITableSimple.storyName = '简单表格'

export default ITableSimple
