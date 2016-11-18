import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'teacherCourses': apiBaseUrl + '/teacher/courses',
    'liveInfo': apiBaseUrl + '/live/info',
    'courses': apiBaseUrl + '/courses',
    'userInfo': apiBaseUrl + '/user/info',

    /**
     * 直播间信息统计
     */
    'liveStatistic': apiBaseUrl + '/live/statistics/visit-log',

    /**
     * 文字直播
     */
    'textLiveList': apiBaseUrl + '/text-lives/{textRoomId}/texts',
    'postText': apiBaseUrl + '/live/text-room/{id}/texts',

    /**
     * 指标管理
     */
    'targetList': apiBaseUrl + '/teacher/targets',
    'postTarget': apiBaseUrl + '/teacher/targets',
    'deleteTarget': apiBaseUrl + '/teacher/targets/{targetId}',

    /**
     * 消息列表
     */
    'messageList': apiBaseUrl + '/user/notices',
    'messageContent': apiBaseUrl + '/user/notices/{id}',

    /**
     * 拜徒管理
     */
    'followerList': apiBaseUrl + '/teacher/followers',
    'followerState': apiBaseUrl + '/teacher/followers/{uid}',

    /**
     * 视频管理
     */
    'recordingsList': apiBaseUrl + '/teacher/recordings',
    'deleteRecording': apiBaseUrl + '/teacher/recordings/{recordingId}',

    'coursesList': apiBaseUrl + '/teacher/courses',
    'postCourse': apiBaseUrl + '/teacher/courses',
    'deleteCourse': apiBaseUrl + '/teacher/courses/{courseId}',

    'videoHighlightList': apiBaseUrl + '/teacher/video-highlights',

    /**
     * 文章管理 
     */
    'articleList': apiBaseUrl + '/user/articles',
    'postArticle': apiBaseUrl + '/user/articles',
    'deleteArticle': apiBaseUrl + '/user/articles/{id}'
};

const ApiService = {
    /**
     * [liveInfo 获取直播间信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    teacherCourses(requestConfig, callback) {
        const url = urlMap.liveInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [liveInfo 获取直播间信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    liveInfo(requestConfig, callback) {
        const url = urlMap.liveInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [courses 获取首页视频]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    courses(requestConfig, callback) {
        const url = urlMap.courses;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [userInfo 获取用户个人信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    userInfo(requestConfig, callback) {
        const url = urlMap.userInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [liveStatistic 获取直播间统计列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    liveStatistic(requestConfig, callback) {
        const url = urlMap.liveStatistic;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [textLiveList 获取文字直播列表]
     * @param  {[string]}   textRoomId  [文字直播ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    textLiveList(textRoomId, requestConfig, callback) {
        const url = urlMap.textLiveList.replace('{textRoomId}', textRoomId);

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postText 发送文字直播]
     * @param  {[string]}   textRoomId  [文字直播ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postText(textRoomId, requestConfig, callback) {
        const url = urlMap.postText.replace('{id}', textRoomId);

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [targetList 指标列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    targetList(requestConfig, callback) {
        const url = urlMap.targetList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postTarget 上传指标]
     * @param  {[object]}   file  [上传附件信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postTarget(file, field, requestConfig, callback) {
        const url = urlMap.postTarget;

        return http.postWithFile(file, field, url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [deleteTarget 删除指标]
     * @param  {[string]}   targetId  [指标ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    deleteTarget(targetId, requestConfig, callback) {
        const url = urlMap.deleteTarget.replace('{targetId}', targetId);

        return http.delete(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [messageList 获取消息列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    messageList(requestConfig, callback) {
        const url = urlMap.messageList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [messageContent 获取消息正文内容]
     * @param  {[string]}   messageId  [消息 id] 
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    messageContent(messageId, requestConfig, callback) {
        const url = urlMap.messageContent.replace('{id}', messageId);

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [followerList 获取师徒列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    followerList(requestConfig, callback) {
        const url = urlMap.followerList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [followerState 改变follower状态，接受或拒绝请求]
     * @param  {[string]}   uId  [followerID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    followerState(uId, requestConfig, callback) {
        const url = urlMap.followerState.replace('{uid}', uId);

        return http.put(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [recordingsList 获取历史录播列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    recordingsList(requestConfig, callback) {
        const url = urlMap.recordingsList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [deleteRecording 删除历史录播]
     * @param  {[string]}   recordingId  [历史录播ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    deleteRecording(recordingId, requestConfig, callback) {
        const url = urlMap.deleteRecording.replace('{recordingId}', recordingId);

        return http.delete(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [coursesList 获取公开课列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    coursesList(requestConfig, callback) {
        const url = urlMap.coursesList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postCourse 上传课程]
     * @param  {[object]}   file  [上传附件信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postCourse(file, form, requestConfig, callback) {
        const url = urlMap.postCourse;

        return http.postWithFile(file, form, url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [deleteCourse 删除课程]
     * @param  {[string]}   courseId  [课程ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    deleteCourse(courseId, requestConfig, callback) {
        const url = urlMap.deleteCourse.replace('{courseId}', courseId);

        return http.delete(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [videoHighlightList 获取视频集锦列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    videoHighlightList(requestConfig, callback) {
        const url = urlMap.videoHighlightList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [articleList 获取文章列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    articleList(requestConfig, callback) {
        const url = urlMap.articleList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postArticle 发表文章]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postArticle(requestConfig, callback) {
        const url = urlMap.postArticle;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [deleteArticle 删除文章]
     * @param  {[string]}   articleId  [文章ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    deleteArticle(articleId, requestConfig, callback) {
        const url = urlMap.deleteArticle.replace('{id}', articleId);

        return http.delete(url, requestConfig.params).then(response => {
            return callback(response);
        });
    }
};

export default ApiService;