import type { Schema, Struct } from '@strapi/strapi';

export interface ElementLink extends Struct.ComponentSchema {
  collectionName: 'components_element_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'earth';
  };
  attributes: {
    external: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    sublink: Schema.Attribute.Component<'element.sub-link', true>;
    text: Schema.Attribute.String;
  };
}

export interface ElementListItem extends Struct.ComponentSchema {
  collectionName: 'components_element_list_items';
  info: {
    displayName: 'List Item';
    icon: 'bulletList';
  };
  attributes: {
    Item_name: Schema.Attribute.String;
  };
}

export interface ElementLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_element_logo_links';
  info: {
    displayName: 'Logo Link';
    icon: 'chartBubble';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_element_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'bell';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'LinkedIn', 'GitHub', 'Website', 'Other']
    >;
    url: Schema.Attribute.String;
  };
}

export interface ElementSubLink extends Struct.ComponentSchema {
  collectionName: 'components_element_sub_links';
  info: {
    displayName: 'SubLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    description: '';
    displayName: 'Top Nav';
  };
  attributes: {
    logo: Schema.Attribute.Component<'element.logo-link', false>;
    navlink: Schema.Attribute.Component<'element.link', true>;
  };
}

export interface PortfolioAbout extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_abouts';
  info: {
    description: '';
    displayName: 'About';
    icon: 'bell';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
  };
}

export interface PortfolioContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_content_blocks';
  info: {
    description: '';
    displayName: 'ContentBlock';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface PortfolioCover extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_covers';
  info: {
    description: '';
    displayName: 'Cover';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PortfolioFullImage extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_full_images';
  info: {
    description: '';
    displayName: 'Full Image';
    icon: 'dashboard';
  };
  attributes: {
    bgcolor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    full_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface PortfolioTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_text_with_images';
  info: {
    description: '';
    displayName: 'Text With Image';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface PortfolioTimeline extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    duration: Schema.Attribute.Enumeration<
      ['Day', 'Days', 'Month', 'Months', 'Year', 'Years']
    >;
    time: Schema.Attribute.Integer;
  };
}

export interface SharedBody extends Struct.ComponentSchema {
  collectionName: 'components_shared_bodies';
  info: {
    displayName: 'body';
    icon: 'brush';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface SharedCarouselBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_blocks';
  info: {
    displayName: 'Carousel Block';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedCodeBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_code_blocks';
  info: {
    displayName: 'CodeBlock';
    icon: 'bold';
  };
  attributes: {
    Caption: Schema.Attribute.Text;
    code: Schema.Attribute.Blocks;
    Language: Schema.Attribute.Enumeration<
      ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'PYTHON', 'BASH', 'OTHER']
    >;
  };
}

export interface SharedEmbedBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_embed_blocks';
  info: {
    displayName: 'EmbedBlock';
    icon: 'code';
  };
  attributes: {
    embedCode: Schema.Attribute.Text;
    EmbedType: Schema.Attribute.Enumeration<
      ['iframe', 'youtube', 'instagram', 'tweet', 'other']
    >;
    embedUrl: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    width: Schema.Attribute.Integer;
  };
}

export interface SharedGalleryBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_blocks';
  info: {
    description: '';
    displayName: 'GalleryBlock';
    icon: 'chartCircle';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedListBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_blocks';
  info: {
    displayName: 'ListBlock';
    icon: 'bulletList';
  };
  attributes: {
    item: Schema.Attribute.Component<'element.list-item', true>;
    Type: Schema.Attribute.Enumeration<['unordered', 'ordered', 'checklist']>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'media';
    icon: 'chartBubble';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    new_tab: Schema.Attribute.Boolean;
    no_follow: Schema.Attribute.Boolean;
  };
}

export interface SharedQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_quote_blocks';
  info: {
    displayName: 'QuoteBlock';
    icon: 'filter';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'check';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'element.link': ElementLink;
      'element.list-item': ElementListItem;
      'element.logo-link': ElementLogoLink;
      'element.social-link': ElementSocialLink;
      'element.sub-link': ElementSubLink;
      'layout.top-nav': LayoutTopNav;
      'portfolio.about': PortfolioAbout;
      'portfolio.content-block': PortfolioContentBlock;
      'portfolio.cover': PortfolioCover;
      'portfolio.full-image': PortfolioFullImage;
      'portfolio.text-with-image': PortfolioTextWithImage;
      'portfolio.timeline': PortfolioTimeline;
      'shared.body': SharedBody;
      'shared.carousel-block': SharedCarouselBlock;
      'shared.code-block': SharedCodeBlock;
      'shared.embed-block': SharedEmbedBlock;
      'shared.gallery-block': SharedGalleryBlock;
      'shared.list-block': SharedListBlock;
      'shared.media': SharedMedia;
      'shared.quote-block': SharedQuoteBlock;
      'shared.seo': SharedSeo;
      'shared.text': SharedText;
    }
  }
}
