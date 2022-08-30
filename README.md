# a11yStatementGen

**a11yStatementGen** is an accessibility statement generator which has been developed to help public sector organisations in generating accessibility statements in Luxembourg. It is able to generate an accessibility statement in four languages: luxembourgish, french, german and english. One instance of this software is usually deployed at this address:
https://accessibilite.public.lu/fr/tools/decla.html

The [latest version of this tool is always available on netlify](https://a11y-statement-gen.netlify.app) (synced with the main branch).


## Installation

```
git clone https://github.com/accessibility-luxembourg/a11yStatementGen.git
cd a11yStatementGen
npm install
```

## Usage

To build the app, run the following command:
```
npm run build
```

The files are available in the `dist` folder.

If you want to launch a basic web server to see these files, you can run: 
```
npm run serve
```

## Metadata

The statement templates provided by this tool include some metadata embedded in the html code, which increase the machine-readability of accessibility statements. This metadata is globally compatible with the metadata implemented in the [Accessibility Statement Generator](https://github.com/w3c/wai-statements) from the [WAI-Tools](https://www.w3.org/WAI/about/projects/wai-tools/) project.

Here is the metadata structure which is currently implemented:

- basic-information
    - organization-name (1..1): organization name
    - website-name (1..n): list of urls of websites oder mobile apps
    - conformance-status (1..1): the conformity level is given as another class on the same element (total / partial / none)
    - statement-created-date (1..1): statement creation date
    - statement-renewal-date (0..1): statement renewal date
    - feedback h-card
        - email (1..1): email address to be contacted in case of accessibility issues
- technical-information accessibility-limitations 
    - non-compliant (0..n): list of non-compliance issues which will be fixed
    - disproportionate-burden (0..n): list of non-conformity issues which cannot be solved because of a disproportionate burden
    - exception (0..n): list of accessibility issues which are outside the scope of the law

The metadata structure is implemented via classes attributes in the html code of the generated accessibility statements.

This metadata can be crawled by this tool: [a11yStatementCrawler](https://github.com/accessibility-luxembourg/a11yStatementCrawler)

## Related projects

This project is inspired by the [Accessibility Statement Generator](https://github.com/w3c/wai-statements) from the [WAI-Tools](https://www.w3.org/WAI/about/projects/wai-tools/) project, which did not support the simultaneous generation of statements in multiple languages, as needed by the multilingual luxembourgish context.
The statement templates are based on the template defined by the European Commission in the [implementing act (UE) 2018/1523](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32018D1523) of the [Web Accessibility Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016L2102), which have been adapted to support the [luxembourgish law implementing this directive](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

## License
This software is (c) [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.
