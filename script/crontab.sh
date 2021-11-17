crontab -l
crontab -e
crontab -r

i
esc
:eq

every minute:
* * * * * /usr/local/bin/node /Users/yifan/Downloads/CCMarketplace/script/batch.js >> /tmp/test.txt
every Monday at midnight:
0 0 * * *1 /usr/local/bin/node /Users/yifan/Downloads/CCMarketplace/script/batch.js >> /tmp/test.txt
every 5 min:
*/5 * * * * /usr/local/bin/node /Users/yifan/Downloads/CCMarketplace/script/batch.js >> /tmp/test.txt

