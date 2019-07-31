import request from '@/utils/request'

// 向后端服务器发送ajax请求
const api_name = '/admin/edu/teacher'
export default{
  getList() {
    return request({
      url: api_name,
      method: 'get'
    })
  },
  // 获取当前讲师列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  // 用于保存新增的讲师defaultForm
  save(teacher) {
    return request({
      url: api_name,
      method: 'post',
      data: teacher
    })
  },

  // 获取id
  getById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: `get`
    })
  },

  // 根据ID更新讲师列表
  updateById(teacher) {
    return request({
      url: `${api_name}/${teacher.id}`,
      method: 'put',
      data: teacher
    })
  }

}
