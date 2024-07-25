import { exec } from 'child_process';
import open from 'open';

const url = 'https://donate.unicef.ph/campaign/champions';
const configPath = process.argv[2];
const outputPath = process.argv[3];

exec(`lighthouse ${url} --config-path=${configPath} --output html --output-path=${outputPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Lighthouse: ${error}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);

  open(outputPath).then(() => {
    console.log(`Report opened: ${outputPath}`);
  }).catch((openError) => {
    console.error(`Error opening report: ${openError}`);
  });
});
