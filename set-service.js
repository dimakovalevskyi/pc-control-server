var Service = require('node-windows').Service;
var ip = require('ip');

// Create a new service object.
var svc = new Service({
  name:'PC Control Server',
  description: 'Node.js server for remote PC control',
  script: `${__dirname}\\index.js`
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function(){
  console.log(`${svc.name} was successfully installed as service!`);
  svc.start();
});

// Listen for the "uninstall" event, which indicates the
// process is uninstalled as a service.
svc.on('uninstall', function(){
  console.log(`${svc.name} was successfully uninstalled as service!`);
});

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start', function(){
  console.log(`${svc.name} was successfully run as service!\nServer is started on: ${ip.address()}:5000`);
});

// Listen for the "alreadyinstalled" event which indicates the
// process is already installed as a service.
svc.on('alreadyinstalled', function(){
  console.log(`Service with name '${svc.name}' is already installed!`);
});

// Listen for the "alreadyuninstalled" event and let us know when the
// service is not exist.
svc.on('alreadyuninstalled', function(){
  console.log(`Service with name '${svc.name}' is already uninstalled!`);
});

//Check if app run with `--remove` flag.
if (process.argv.indexOf('--remove') > -1) {
    // Uninstall the service.
    svc.uninstall();
} else {
    // Install the script as a service.
    svc.install();
}
