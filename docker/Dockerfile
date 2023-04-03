FROM alpine:3.10

RUN adduser appxuser -u 1001 -S --disabled-password \
    && addgroup -g 5000 -S appx \
    && addgroup appxuser appx

COPY fileone.txt /fileone.txt
COPY filetwo.txt /filetwo.txt

RUN ls -la

RUN chown 1001  /fileone.txt \
    && chown 1001  /filetwo.txt \
    && chmod 770 /fileone.txt \
    && chmod 770 /filetwo.txt

USER 1001
