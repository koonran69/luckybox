<?php

namespace Domains\Core\Traits;

use Illuminate\Support\Facades\File;

trait LoadAndPublishData
{
    public function loadConfig(array $exclude = []): self
    {
        $configPaths = $this->getFilesInFolder('Config');
        
        foreach($configPaths as $configPath)
        {
            $fileName = pathinfo($configPath, PATHINFO_FILENAME);

            if(in_array($fileName, $exclude))
            {
                continue;
            }

            $this->mergeConfigFrom($configPath, $this->getNameModule() .  '.' . $fileName);
        }

        return $this;
    }

    protected function getFilesInFolder(string $folderName): array
    {
        $files = File::glob($this->getPath($folderName) . '/*.php');

        return $files;
    }

    protected function autoload()
    {
        $helpers = File::glob($this->getPath('Helpers') . '/*.php');
        
        foreach ($helpers as $helper)
        {
            File::requireOnce($helper);
        }

        return $this;
    }

    protected function getPath($path = null)
    {
        $reflection = new \ReflectionClass($this);
        $directory = dirname(dirname($reflection->getFileName()));

        $path =  $path ? rtrim(ltrim($path, '/'), '/') : '';
        
        return $directory . '/' . $path;
    }

    protected function getNameModule()
    {
        $reflection = new \ReflectionClass($this);

        $directory = dirname(dirname($reflection->getFileName()));

        return strtolower(basename($directory));
    }
}