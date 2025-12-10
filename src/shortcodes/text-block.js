module.exports = function (blockTitle, paragraphs) {
    const generatedParagraphs = paragraphs?.map(p => `<p>${p}</p>`).join("");

    return `
        <div
            class="nectar-split-heading font_size_1-7vw markup-generated animated-in"
            data-align="default"
            data-m-align="inherit"
            data-text-effect="letter-reveal-bottom"
            data-animation-type="line-reveal-by-space"
            data-animation-delay="0"
            data-animation-offset=""
            data-m-rm-animation=""
            data-stagger=""
            data-custom-font-size="true"
            style="font-size: 1.7vw; line-height: 1.87vw;"
        >
            <h4 style=" color: #55565a;" aria-label="${blockTitle}">${blockTitle}</h4>
        </div>
        <div class="wpb_text_column wpb_content_element  vc_custom_1744108696726">
            <div class="wpb_wrapper">
                <div class="wpb_row vc_row vc_row-fluid mk-fullwidth-false attched-false vc_custom_1650856733808 js-master-row mk-grid mk-in-viewport" data-mk-stretch-content="true">
                    <div class="vc_col-sm-12 wpb_column column_container _ height-full">
                        <div class=" vc_custom_1740574413666">
                            <div id="text-block-13" class="mk-text-block ">
                                <div id="text-block-8" class="mk-text-block ">
                                   ${generatedParagraphs}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
}