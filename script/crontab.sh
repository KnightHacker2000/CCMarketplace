crontab -l
crontab -e

every minute:
* * * * * /usr/local/bin/node /Users/yifan/Downloads/CCMarketplace/script/batch_process.py >> /tmp/test.txt
every Monday at midnight:
0 0 * * *1/usr/local/bin/node /Users/yifan/Downloads/CCMarketplace/script/batch_process.py >> /tmp/test.txt

crontab -r