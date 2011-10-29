if (typeof window.templates === 'undefined') { window.templates = {}; }
window.templates['gadget'] = "<div style='widh: 100px; position:absolute; top:3px; left:3px;'>\n  <button class=\"create_story_button\">Create Story</button>\n</div>\n\n<div class='notification_area' style=' position:absolute; top:3px; left:113px;'>&nbsp;</div>\n\n<div style='widh: 100px; position:absolute; top:3px; right:3px;'>\n  <a href=\"#\" id='toggle_settings_button' style='font-size: small; text-decoration:none;'>settings ▼</a>\n</div>\n\n<div style='clear:both;'></div>\n\n<div id='settings' style='font-size: small; display:none; padding-top:30px;'>\n  <div>\n    <label>Pivotal API Token *\n      <input name=\"pivotal_api_token\" />\n    </label>\n    <p><small>To get an API token log in to PivotalTracker, open <em><a href='https://www.pivotaltracker.com/profile'>Profile</a></em> form, scroll down to <em>API Token section</em> and click <em>Create New Token</em>.</small></p>\n  </div>\n  \n  <div>\n    <label>Project ID *\n    <input name=\"project_id\" /></label>\n    <p><small>ID of a PivotalTracker project Geepivo will create stories in. You can find project ID at the end of project URL, e.g.: https://www.pivotaltracker.com/projects/12345</small></p>.\n  </div>\n  \n  <div>\n    <label>Story type\n    <input name=\"story_type\" /></label>\n    <p><small>One of following: \"feature\", \"chore\" or \"bug\". Leave the field empty to use the default value - \"feature\".</small></p>\n  </div>\n  \n  <div>\n    <label>Requested by:\n    <input name=\"requested_by\" /></label>\n    <p><small>Optionally specify user who will be notified about story delivery and prompted to accept or reject it. By default it's the owner of API token. Enter \"Full Name\" here, as visible in Pivotal Tracker's story form.</small></em>.\n  </div>\n  \n  <div>\n    <label>Owned by:\n    <input name=\"owned_by\" /></label>\n    <p><small>User the story will be assigned to. By default the story is not assigned. Enter \"Full Name\" here, as visible in Pivotal Tracker's story form.</small></em>.\n  </div>\n\n  <div>\n    <label>Integration ID (optional)\n    <input name=\"integration_id\" /></label>\n    <p><small>Experimental hack. Configure \"External Integration\" in Pivotal Tracker and it will be filled with Story ID. Set base URL of the integration to something like <em>https://mail.google.com/mail/u/0/?shva=1#search/</em>, story ID will be prepended and you will be able to search for emails that contain links to the story.</small></em>.\n  </div>\n  \n  <input type='submit' class='save_settings_button' value=\"Save settings\" />\n</div>\n";