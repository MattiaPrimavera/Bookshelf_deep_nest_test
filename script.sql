use "bookshelf_relations_test";

CREATE TABLE IF NOT EXISTS `contacts` (
    `id` INT NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `idContact` INT NOT NULL,

  PRIMARY KEY (`id`),
  CONSTRAINT `fk_id_contact`
    FOREIGN KEY (`idContact`)
    REFERENCES `contacts`(`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)

ENGINE = InnoDB;
