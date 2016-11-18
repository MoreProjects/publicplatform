import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PublicApp from './components/PublicApp';
import ajax from './api/ApiService';

/**
 * 全局
 * 
 * 用户基本信息
 */
window.globalUserInfo = null;

window.onGetUserInfo = {};

window.registerToGetUserInfo = function(key, callback) {
    if (window.globalUserInfo) {
        callback && callback();
    } else {
        if (key) {
            window.onGetUserInfo[key] = callback;
        }
    }
};



function fetch() {
    ajax.liveInfo({
        params: {}
    }, (responseData) => {
        if (responseData) {
            window.globalUserInfo = {
                userName: responseData.owner_name,
                classroomID: responseData.id,
                classroomName: responseData.room_name,
                followerNum: responseData.following,
                userImage: responseData.portrait_url,
                wordRoomId: (responseData.text_room && responseData.text_room.id) || ''
            };

            for (let key in window.onGetUserInfo) {
                window.onGetUserInfo[key] && window.onGetUserInfo[key]();
            }
        }
    });
}

function bootstrap() {
    // Make taps on links and buttons work fast on mobiles
    if (FastClick.attach) {
        FastClick.attach(document.body);
    } else {
        FastClick(document.body);
    }

    render(
        (<Router history={hashHistory}>
            <Route path="/" onEnter={fetch}>
                <IndexRoute component={PublicApp} />
                <Route path="/article" component={PublicApp} />
                <Route path="/material" component={PublicApp} />
                <Route path="/template" component={PublicApp} />
                <Route path="/leaguer" component={PublicApp} />
                <Route path="/lecture" component={PublicApp} />
                <Route path="/agent" component={PublicApp} />
                <Route path="/customerservice" component={PublicApp} />
                <Route path="/analysisuser" component={PublicApp} />
                <Route path="/analysisaritcle" component={PublicApp} />
                <Route path="/analysispage" component={PublicApp} />
                <Route path="/pay" component={PublicApp} />
                <Route path="/active" component={PublicApp} />
                <Route path="/ads" component={PublicApp} />
                <Route path="/product" component={PublicApp} />
                <Route path="/task" component={PublicApp} />
                <Route path="/auction" component={PublicApp} />

                <Route path="/suggest" component={PublicApp} />
                <Route path="/message" component={PublicApp} />
                <Route path="/illegal" component={PublicApp} />
                <Route path="/public" component={PublicApp} />
                <Route path="/developtool" component={PublicApp} />
                <Route path="/developconfig" component={PublicApp} />
                <Route path="/access" component={PublicApp} />

                <Route path="/finance" component={PublicApp} />
                <Route path="/deal" component={PublicApp} />
                <Route path="/business" component={PublicApp} />
                <Route path="/financial" component={PublicApp} />

                <Route path="/customerservice" component={PublicApp} />
                <Route path="/customeraccess" component={PublicApp} />
                <Route path="/sentitive" component={PublicApp} />
            </Route>
        </Router>), document.getElementById('react_container')
    );
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    bootstrap();
} else {
    document.addEventListener('DOMContentLoaded', bootstrap, false);
}
