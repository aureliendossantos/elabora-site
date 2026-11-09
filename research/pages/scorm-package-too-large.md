# Notes: SCORM package too large for the LMS

Page: `src/content/compare/en/scorm-too-large.md`. Researched on 8 November 2026.

## Sources, with the day they were read (8 Nov 2026)

- Storyline package larger than the project: 206 MB project, 246 MB package over a 230 MB limit; after compressing images, project 196 MB and package about 270 MB; a 104 KB image about 3 MB once published (10 Sep 2026): https://community.articulate.com/discussions/discuss/storyline-scorm-export-suddenly-much-larger-than-the-storyline-project/1270787
- Rise course at 741 MB after translation, refused by the LMS (31 Aug 2026): https://community.articulate.com/discussions/discuss/scorm-file-upload---lms/1270122
- Rise package keeping media from earlier snapshots; workaround: duplicate the course (29 Oct 2026): https://community.articulate.com/discussions/discuss/rise-courseware---lms-publishing---scorm-file-contains-media-from-snapshots/1274136
- Keeping SCORM packages small, a Rise thread: video, images, files from Canva or Adobe, AI-generated audio, GIFs, backgrounds (December 2025): https://community.articulate.com/discussions/discuss/keeping-scorm-package-small-best-practices/1246142
- Storyline, Best Practices for High Quality Images and Videos (Quality settings, Compression None; updated 16 Jan 2026): https://www.articulatesupport.com/article/Storyline-360-Best-Practices-for-High-Quality-Images-and-Videos
- LMS upload limits: our LMS profiles, `/en/docs/developers/lms-profiles/`, with each LMS's documentation read in September and October 2026.

## Left out of the page, and why (9 Nov 2026)

- The forum reports as a list in « The problem »: the page keeps them as causes (publishing, translation) and moves the Rise snapshot thread into the Rise step.
- The image-compression detail of the 10 Sep thread (the package grew after the images were compressed): explaining it would take more research than the page needs, and left unexplained it would raise a question.

## Elabora facts, checked in the code

- The weight at each media quality in Publish, the check against the client's LMS, optimized copies of PNG, high-bitrate video, HEIC and ProRes, only used media in the package (`packages/node/src/build.ts` in elabora-core), `elabora inspect` for any package.

## To check again

- The LMS limits (each LMS changes them in its settings or plans).
