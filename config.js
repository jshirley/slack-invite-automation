var util = require('util');

var inviteSources = {};
if (process.env.INVITE_SOURCES) {
  process.env.INVITE_SOURCES.split(';').forEach(function(source) {
    var parts = source.split(':');
    if (parts.length != 2) {
      util.debuglog('config')('INVITE_SOURCES was specified, but had an invalid pair. Check configuration, format should be `source:channel1,channel2;source2:channel1,channel2`')
    } else {
      inviteSources[parts[0]] = parts[1];
    }
  });
  console.log(inviteSources);
}

module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'YOUR-TEAM-NAME',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'YOUR-TEAM.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'YOUR-ACCESS-TOKEN',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,
  inviteSources: inviteSources,
  locale: process.env.LOCALE || "en",
};
