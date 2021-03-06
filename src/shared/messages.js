const onWebMessage = (listener) => {
  window.addEventListener('message', (event) => {
    let sender = event.source;
    let message = null;
    try {
      message = JSON.parse(event.data);
    } catch (e) {
      // ignore unexpected message
      return;
    }
    listener(message, sender);
  });
};

const onBackgroundMessage = (listener) => {
  browser.runtime.onMessage.addListener(listener);
};

const onMessage = (listener) => {
  onWebMessage(listener);
  onBackgroundMessage(listener);
};

export default {
  BACKGROUND_OPERATION: 'background.operation',

  CONSOLE_UNFOCUS: 'console.unfocus',
  CONSOLE_ENTER_COMMAND: 'console.enter.command',
  CONSOLE_ENTER_FIND: 'console.enter.find',
  CONSOLE_QUERY_COMPLETIONS: 'console.query.completions',
  CONSOLE_SHOW_COMMAND: 'console.show.command',
  CONSOLE_SHOW_ERROR: 'console.show.error',
  CONSOLE_SHOW_INFO: 'console.show.info',
  CONSOLE_SHOW_FIND: 'console.show.find',
  CONSOLE_HIDE: 'console.hide',

  FOLLOW_START: 'follow.start',
  FOLLOW_REQUEST_COUNT_TARGETS: 'follow.request.count.targets',
  FOLLOW_RESPONSE_COUNT_TARGETS: 'follow.response.count.targets',
  FOLLOW_CREATE_HINTS: 'follow.create.hints',
  FOLLOW_SHOW_HINTS: 'follow.update.hints',
  FOLLOW_REMOVE_HINTS: 'follow.remove.hints',
  FOLLOW_ACTIVATE: 'follow.activate',
  FOLLOW_KEY_PRESS: 'follow.key.press',

  MARK_SET_GLOBAL: 'mark.set.global',
  MARK_JUMP_GLOBAL: 'mark.jump.global',

  TAB_SCROLL_TO: 'tab.scroll.to',

  FIND_NEXT: 'find.next',
  FIND_PREV: 'find.prev',
  FIND_GET_KEYWORD: 'find.get.keyword',
  FIND_SET_KEYWORD: 'find.set.keyword',

  ADDON_ENABLED_QUERY: 'addon.enabled.query',
  ADDON_ENABLED_RESPONSE: 'addon.enabled.response',
  ADDON_TOGGLE_ENABLED: 'addon.toggle.enabled',

  OPEN_URL: 'open.url',

  SETTINGS_RELOAD: 'settings.reload',
  SETTINGS_CHANGED: 'settings.changed',
  SETTINGS_QUERY: 'settings.query',

  WINDOW_TOP_MESSAGE: 'window.top.message',
  CONSOLE_FRAME_MESSAGE: 'console.frame.message',

  onWebMessage,
  onBackgroundMessage,
  onMessage,
};
