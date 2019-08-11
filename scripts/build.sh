#!/bin/bash
echo "Sorting JSON Data"
yarn run sort
echo "Generating TS file"
sed -e '1s/^/const data = /' -e '/^$/d' -e '$ s/$/ as const/' data/metrics.json >| data/metrics.ts
echo 'export default data' >> data/metrics.ts
echo "Compiling Typescript"
tsc -p .
echo "Simplifying Type Definitions"
vim -e data/metrics.d.ts < src/simplify-types.vim
echo "Combining Type Definitions"
cat src/shared-types.d.ts data/metrics.d.ts >| data/temp
mv data/temp data/metrics.d.ts
echo "Running Prettier"
prettier data/metrics.d.ts --write
prettier data/metrics.json --write
echo "Copying README.md"
cp README.md data/README.md
echo "Removing metrics.ts file"
rm data/metrics.ts
echo "Build Complete"