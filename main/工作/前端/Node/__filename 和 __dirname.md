
```js
import { fileURLToPath } from "url";

import { dirname } from "path";

  

const url = import.meta.url;

const __filename = fileURLToPath(url);

const __dirname = dirname(__filename);

  

console.log(url, __filename, __dirname);
```

这个实现可以修复 "__dirname is not defined in ES module scope"