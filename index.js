import $ from 'miaoxing';
import curUrl from '@mxjs/cur-url';
import app from '@mxjs/app';

const api = {};

// HTTP methods

api.get = function (url, config) {
  return $.get(app.apiUrl(url), config);
};

api.post = function (url, config) {
  return $.post(app.apiUrl(url), config);
};

api.patch = function (url, config) {
  return $.patch(app.apiUrl(url), config);
};

api.put = function (url, config) {
  return $.put(app.apiUrl(url), config);
};

api.delete = function (url, config) {
  return $.delete(app.apiUrl(url), config);
};

// Item

api.getCurItem = function (id, config) {
  return $.get(app.apiShow(id), config);
};

api.postCurItem = function (id, config) {
  return $.post(app.apiShow(id), config);
};

api.patchCurItem = function (id, config) {
  return $.patch(app.apiShow(id), config);
};

api.putCurItem = function (id, config) {
  return $.put(app.apiShow(id), config);
};

api.deleteCurItem = function (id, config) {
  return $.delete(app.apiShow(id), config);
};

// Collection

api.getCurColl = function (config) {
  return $.get(curUrl.apiColl(), config);
};

api.postCurColl = function (config) {
  return $.post(curUrl.apiColl(), config);
};

api.patchCurColl = function (config) {
  return $.patch(curUrl.apiColl(), config);
};

api.putCurColl = function (config) {
  return $.put(curUrl.apiColl(), config);
};

api.deleteCurColl = function (config) {
  return $.delete(curUrl.apiColl(), config);
};

// Current page

api.getCur = function (config) {
  return $.get(curUrl.api(), config);
};

api.postCur = function (config) {
  return $.post(curUrl.api(), config);
};

api.patchCur = function (config) {
  return $.patch(curUrl.api(), config);
};

api.putCur = function (config) {
  return $.put(curUrl.api(), config);
};

api.deleteCur = function (config) {
  return $.delete(curUrl.api(), config);
};

/**
 * 提交当前页面对应的表单
 *
 * @experimental
 */
api.curForm = (config) => {
  return $.http({...curUrl.apiFormUrlAndMethod(), ...config});
};

export default api;
