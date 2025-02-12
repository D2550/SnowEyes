// 指纹识别配置
export const FINGERPRINT_CONFIG = {
  HEADERS: [
    {type: 'server',name: 'Apache',pattern: /^apache\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Apache Tomcat',pattern: /^apache-(coyote)\/?([\d\.]+)?$/i,header: 'server',value:'component,version',extType: 'technology', extName: 'Java'},
    {type: 'server',name: 'Nginx',pattern: /^nginx\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'IIS',pattern: /^microsoft-iis\/?([\d\.]+)?$/i,header: 'server',value:'version',extType: 'os', extName: 'Windows'},
    {type: 'server',name: 'LiteSpeed',pattern: /^litespeed\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Resin',pattern: /^resin\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Cloudflare',pattern: /^cloudflare\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Varnish',pattern: /^varnish\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'OpenResty',pattern: /^openresty\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Tengine',pattern: /^tengine\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'BWS',pattern: /^bws\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Zeus',pattern: /^zeus\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'server',name: 'Server',pattern: /^waf|server\/?([\d\.]+)?$/i,header: 'server',value:'version'},
    {type: 'os',name: 'Windows',pattern: /win64|win32|win10|win7|win8|win11/i,header: 'server'},  
    {type: 'os',name: 'Ubuntu',pattern: /ubuntu/i,header: 'server'},
    {type: 'framework',name: 'Spring',pattern: /^([a-zA-Z0-9\.\-]+):([a-zA-Z0-9\-]+):(\d+)$/i,header: 'x-application-context',value:'app,env,port',extType: 'technology', extName: 'Java'},
    {type: 'framework',name: 'ASP.NET',pattern: /[0-9.]+/i,header: 'x-aspnet-version',value:'version'},
    {type: 'framework',name: 'ASP.NET MVC',pattern: /[0-9.]+/i,header: 'x-aspnetmvc-version',value:'version'},
    {type: 'framework',name: 'ASP.NET',pattern: /asp.net/i,header: 'x-powered-by'},
    {type: 'technology',name: 'PHP',pattern:/^php\/?([\d\.]+)?$/i,header: 'x-powered-by',value:'version'},
    {type: 'technology',name: 'Java',pattern: /java/i,header: 'x-powered-by'},
    {type: 'security',name: 'WAF',pattern: /^waf\/?([\d\.]+)?$/i,header: 'x-powered-by',value:'version'},
    {type: 'security',name: 'Janusec',pattern: /janusec/i,header: 'x-powered-by'},
    {type: 'security',name: '360',pattern: /^([a-zA-Z0-9\-\.]+)\s([0-9.]+)\s([A-Za-z0-9]+)$/i,header: 'x-safe-firewall',value:'app,version,appType'},
    {type: 'security',name: 'HSTS',pattern: /max-age=(\d+)/i,header: 'strict-transport-security',value:'time'},
  ],
  // Cookie 识别配置
  COOKIES: [
    {type: 'technology',name: 'PHP',match: /PHPSESSID/i},
    {type: 'framework',name: 'ASP.NET',match: /ASP\.NET_SessionId|ASPSESSIONID/i},
    {type: 'technology',name: 'Java',match: /JSESSIONID|jeesite/i},
  ],
  ANALYTICS: {
      baidu: {
        pattern: '*://hm.baidu.com/hm.js*',
        name: '百度统计',
        description: '通过网络请求识别到百度统计服务，网站的用户访问数据会被百度记录',
        version: 'Baidu Analytics'
      },
      yahoo: {
        pattern: '*://analytics.yahoo.com/*',
        name: '雅虎统计',
        description: '通过网络请求识别到雅虎统计服务，网站的用户访问数据会被雅虎记录',
        version: 'Yahoo Analytics'
      },
      google: {
        pattern: '*://www.google-analytics.com/*',
        name: '谷歌统计',
        description: '通过网络请求识别到谷歌统计服务，网站的用户访问数据会被谷歌记录',
        version: 'Google Analytics'
      }
    },
  DESCRIPTIONS: [
    {name: 'framework',description: '框架'},
    {name: 'technology',description: '语言'},
    {name: 'security',description: '(安全应用/策略)'},
    {name: 'server',description: '服务器'},
    {name: 'os',description: '操作系统'},
    {name: 'app',description: '应用'},
    {name: 'env',description: '环境'},
    {name: 'port',description: '端口'},
    {name: 'version',description: '版本'},
    {name: 'builder',description: '构建工具'},
    {name: 'framework',description: '框架'},
    {name: 'appType',description: '应用类型'},
    {name: 'time',description: '时间'},
    {name: 'component',description: '组件'},
  ]
}; 