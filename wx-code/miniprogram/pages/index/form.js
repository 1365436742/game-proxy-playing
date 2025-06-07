export const baseFormList = [
  {
    label: "考试地区",
    key: "province",
    require: true,
    componentType: 'area'
  },
  {
    label: "高考分数",
    key: "score",
    componentType: 'input',
    type: 'number',
    placeholder: '请输入高考分数',
    require: true
  },
  {
    key: "subject",
    require: true,
    label: "选择科目",
    componentType: 'subject'
  },
  {
    label: "全省排名",
    key: "rank",
    componentType: 'input',
    type: 'number',
    placeholder: '请输入全省排名'
  },
]
export const hobbyFormList = [
  {
    label: "意向专业",
    key: "major",
    componentType: 'input',
    placeholder: '例如：计算机科学、金融学'
  },
  {
    label: "兴趣爱好",
    key: "hobby",
    componentType: 'input',
    placeholder: '例如：编程、音乐、运动'
  },
  {
    label: "期望岗位",
    key: "postion",
    componentType: 'input',
    placeholder: '例如：软件工程师、数据分析师'
  },
]


export function validateForm(formData) {
  const errors = {};
  let errorId = ""
  if (!formData.province) {
    errors.province = '请选择考试地区';
    if (!errorId) {
      errorId = 'province'
    }
  }
  if (!formData.score) {
    errors.score = '请输入高考分数';
    if (!errorId) {
      errorId = 'score'
    }
  }
  if (formData.subject.length < 3) {
    errors.subject = '请选择3个科目';
    if (!errorId) {
      errorId = 'subject'
    }
  }
  return { errors, errorId };
}