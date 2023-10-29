// Copyright 2020 Google, LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const package = require('./package.json')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(`${package.name} received a request.`);
    res.send(`Congratulations, you successfully deployed a container image to Cloud Run!`);
});


app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`${package.name} listening on port: ${port}`);
});