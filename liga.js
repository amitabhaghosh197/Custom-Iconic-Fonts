/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'hearing': '&#xeea8;',
            'loop': '&#xeea9;',
            'sync': '&#xeea9;',
            'play_arrow': '&#xeeaa;',
            'play_circle_filled': '&#xeeab;',
            'play_circle_outline': '&#xeeac;',
            'sort_by_alpha': '&#xeead;',
            'fiber_new': '&#xeeae;',
            'playlist_play': '&#xeeaf;',
            'art_track': '&#xeeb0;',
            'fiber_manual_record': '&#xeeb1;',
            'fiber_smart_record': '&#xeeb2;',
            'music_video': '&#xeeb3;',
            'subscriptions': '&#xeeb4;',
            'playlist_add_check': '&#xeeb5;',
            'queue_play_next': '&#xeeb6;',
            'remove_from_queue': '&#xeeb7;',
            'slow_motion_video': '&#xeeb8;',
            'web_asset': '&#xeeb9;',
            'fiber_pin': '&#xeeba;',
            'branding_watermark': '&#xeebb;',
            'call_to_action': '&#xeebc;',
            'featured_play_list': '&#xeebd;',
            'featured_video': '&#xeebe;',
            'note': '&#xeebf;',
            'video_call': '&#xeec0;',
            'video_label': '&#xeec1;',
            '4k': '&#xeec2;',
            'missed_video_call': '&#xeec3;',
            'control_camera': '&#xeec4;',
            'business': '&#xeec5;',
            'domain': '&#xeec5;',
            'call': '&#xeec6;',
            'call_end': '&#xeec7;',
            'call_made': '&#xeec8;',
            'call_merge': '&#xeec9;',
            'merge_type': '&#xeec9;',
            'call_missed': '&#xeeca;',
            'call_received': '&#xeecb;',
            'call_split': '&#xeecc;',
            'chat': '&#xeecd;',
            'location_off': '&#xeece;',
            'location_on': '&#xeecf;',
            'place': '&#xeecf;',
            'room': '&#xeecf;',
            'ring_volume': '&#xeed0;',
            'vpn_key': '&#xeed1;',
            'undo': '&#xeed2;',
            'access_alarm': '&#xeed3;',
            'alarm': '&#xeed3;',
            'access_alarms': '&#xeed4;',
            'access_time': '&#xeed5;',
            'query_builder': '&#xeed5;',
            'schedule': '&#xeed5;',
            'add_alarm': '&#xeed6;',
            'alarm_add': '&#xeed6;',
            'airplanemode_inactive': '&#xeed7;',
            'airplanemode_active': '&#xeed8;',
            'flight': '&#xeed8;',
            'local_airport': '&#xeed8;',
            'bluetooth_connected': '&#xeed9;',
            'bluetooth_disabled': '&#xeeda;',
            'bluetooth_searching': '&#xeedb;',
            'bluetooth_audio': '&#xeedb;',
            'near_me': '&#xeedc;',
            'transit_enterexit': '&#xeedd;',
            'arrow_drop_down': '&#xeede;',
            'arrow_drop_down_circle': '&#xeedf;',
            'arrow_drop_up': '&#xeee0;',
            'arrow_forward': '&#xeee1;',
            'cancel': '&#xeee2;',
            'check': '&#xeee3;',
            'expand_less': '&#xeee4;',
            'expand_more': '&#xeee5;',
            'fullscreen': '&#xeee6;',
            'fullscreen_exit': '&#xeee7;',
            'menu': '&#xeee8;',
            'keyboard_control': '&#xeee9;',
            'more_vert': '&#xeeea;',
            'refresh': '&#xeeeb;',
            'unfold_less': '&#xeeec;',
            'unfold_more': '&#xeeed;',
            'arrow_upward': '&#xeeee;',
            'subdirectory_arrow_left': '&#xeeef;',
            'subdirectory_arrow_right': '&#xeef0;',
            'arrow_downward': '&#xeef1;',
            'first_page': '&#xeef2;',
            'last_page': '&#xeef3;',
            'arrow_left': '&#xeef4;',
            'arrow_right': '&#xeef5;',
            'arrow_back_ios': '&#xeef6;',
            'arrow_forward_ios': '&#xeef7;',
            'sentiment_dissatisfied': '&#xeef8;',
            'sentiment_neutral': '&#xeef9;',
            'sentiment_satisfied': '&#xeefa;',
            'sentiment_very_dissatisfied': '&#xeefb;',
            'sentiment_very_satisfied': '&#xeefc;',
            'thumb_down_alt': '&#xeefd;',
            'thumb_up_alt': '&#xeefe;',
            'alarm_on': '&#xeeff;',
            'done': '&#xef00;',
            'done_all': '&#xef01;',
            'pan_tool': '&#xef02;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/ag-ico-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
